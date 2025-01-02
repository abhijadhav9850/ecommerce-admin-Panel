import { Response } from "express";

export function send_error(res: Response, error: any) {
    try {
        if (error.sql && error.errors) {
            error.message = error.errors?.map((item: any) => item.message)
        }
        return res.status(error.code).json({ code: error.code || 400, error: error.message || error })
    } catch (error) {
        console.log(error)
        res.json({ code: 405, message: 'Unhandled Error', error })
    }
}