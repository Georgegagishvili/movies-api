const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')
const { EMAIL_ALREADY_EXISTS, AUTHENTICATION_FAILED, INVALID_JWT_TOKEN, USER_NOT_FOUND } = require('../utils/user.errors')

const register = async (req, res) => {
    const { fullName, email, password, metadata } = req.body

    const isEmailUsed = await User.findOne({ email: email })

    try {
        if (isEmailUsed) {
            return res.status(401).json({
                success: false,
                message: EMAIL_ALREADY_EXISTS,
            })
        }
        bcrypt.hash(password, 10)
            .then((hash) => {
                const user = User(
                    {
                        fullName: fullName,
                        email: email,
                        password: hash,
                        metadata: metadata,
                    }
                )

                user.save()
                    .then((response) => {
                        return res.status(201).json({
                            success: true,
                            data: {
                                user: response,
                            }
                        })
                    }).catch((err) => {
                        res.status(500).json({
                            success: false,
                            error: err.message
                        })
                    })
            })

    } catch (err) {
        return res.status(401).send({
            success: false,
            message: err.message,
        })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body

    let user

    User.findOne({
        email: email
    }).then((userData) => {
        if (!userData) {
            return res.status(401).json({
                success: false,
                message: AUTHENTICATION_FAILED,
            })
        }
        user = userData

        return bcrypt.compare(password, user.password)
    })

        .then((response) => {
            if (!response) {
                return res.status(401).json({
                    success: false,
                    message: AUTHENTICATION_FAILED,
                })
            }

            let jwtToken = jwt.sign(
                {
                    userId: user._id,
                    email: user.email,
                    fullName: user.fullName,
                    metadata: user.metadata,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "72h"
                }
            )

            return res.status(200).json({
                success: true,
                data: {
                    accessToken: jwtToken
                }
            })
        }).catch((err) => {
            return res.status(401).json({
                success: false,
                message: err.message
            })
        })
}

const self = async (req, res) => {
    const token = req.headers.authorization.replace("Bearer ", "")

    if (!token) {
        return res.status(401).json(
            {
                success: false,
                message: AUTHENTICATION_FAILED
            }
        )
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.userId

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({
                success: false,
                message: USER_NOT_FOUND,
            })
        }

        return res.status(201).json({
            success: true,
            data: {
                user: user,
            }
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: INVALID_JWT_TOKEN
        })
    }

}

module.exports = {
    register,
    login,
    self,
}