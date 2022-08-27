import ModelScoring from "../models/model-scoring";

const handleScoringModel = new ModelScoring('attemptsExcelTool');

export const getAttemptsData = async (req, res) => {
    try {
        const data = await handleScoringModel.select();
        res.status(200).json({ attempts: data.rows });
    } catch (err) {
        res.status(200).json({ messages: err.stack });
    }
}


export const addAttemptsData = async (req, res) => {
    const { attemptId, env, actualResult, questionCategory } = req.body;
    const columns = '"attemptId", "env", "actualResult", "question-category"';
    const values = `'${attemptId}', '${env}', '${actualResult}', '${questionCategory}'`;
    try {
        const data = await handleScoringModel.insertWithReturn(columns, values);
        res.status(200).json({ messages: data.rows });
    } catch (err) {
        res.status(200).json({ messages: err.stack });
    }
};

export const runSingleTest = async (req, res) => {
    const { id, attemptId } = req.body;
    try {
        const data = await handleScoringModel.selectByColumn(id);
        //run Scoring logic here
        res.status(200).json({ messages: data.rows });
    } catch (err) {
        res.status(500).json({ messages: err.stack });
    }
}