import { connectToDB } from '@utils/database'
import Tattle from '@models/tattle'

export const GET = async (req, {params}) => {
    try {
        await connectToDB();
        const tattle = await Tattle.findById(params.id).populate('creator');
        if(!tattle) return new Response("Tattle not found", {status: 404});
        return new Response(JSON.stringify(tattle), {status: 200});
    } catch (error) {
        return new Response("Failed to fetch tattles", {status: 500});
    }
}

export const PATCH = async (req, {params}) => {
    const {tattle, tag} = await req.json();

    try {
        await connectToDB();

        const existingTattle = await Tattle.findById(params.id);
        if (!existingTattle) return new Response("Tattle not found", {status: 404});

        existingTattle.tattle = tattle;
        existingTattle.tag = tag;
        await existingTattle.save();
        return new Response(JSON.stringify(existingTattle), {status: 200});
    } catch (error) {
        return new Response("Failed to update tattle", {status: 500});
    }
}

export const DELETE = async (req, {params}) => {
    try {
        connectToDB();
        const existingTattle = await Tattle.findByIdAndRemove(params.id);

        return new Response("Tattle deleted sucessfully", {status: 200});
    } catch (error) {
        return new Response("Failed to delete tattle", {status: 500});
    }
}
