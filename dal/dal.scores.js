import supabase from "../db/connection/connectSupabase.js";

export const dalScores = {
    async getAllScores() {
        const { data, error } = await supabase
            .from('player_scores')
            .select('*')
        if (error) throw error;
        return data;
    },
    async insertNewScore(data) {
        const { data: result, error } = await supabase
            .from('player_scores')
            .insert([data])
        if (error) throw error;
        return result;
    },
    async updateScore(id, data) {
        const { data: result, error } = await supabase
            .from('player_scores')
            .update(data)
            .eq('id', id)
        if (error) throw error;
        return result;
    }
}