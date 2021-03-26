import { Request, Response } from 'express';
import medico from '../models/medico';

import medicoSchema from '../models/medico';

export const getMedicos = async (req: Request, res: Response): Promise<void> => {
    try {
        const medicos = await medicoSchema.find()
        res.status(200).json({ medicos })
    }
    catch (error) {
        console.log(error)
        throw error
    }
}

export const addMedico = async (req: Request, res: Response): Promise<void> => {
    try {

        const corpo = req.body
        const medico = new medicoSchema({
            nome: corpo.nome,
            crm: corpo.crm,
            especialidade: corpo.especialidade,
            convenios: corpo.convenios,
            cpf: corpo.cpf
        })
        const novoMedico = await medico.save(corpo)
        res.status(201).json({ novoMedico })
    }
    catch (error) {
        console.log(error)
        throw error
    }


}

export const updateMedico = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const modMed = await medicoSchema.findByIdAndUpdate({ _id: id }, body, { new: true })
        res.status(200).json({
            modMed
        })

    } catch (error) {
        console.log(error)
        throw error
    }
}


