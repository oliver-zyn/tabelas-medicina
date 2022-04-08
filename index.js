const database = require('./db');
const AcessoVascular = require('./models/acesso_vascular-model');
const AvaliacaoAntropometrica = require('./models/avaliacao_antropometrica-model');
const BateriaExame = require('./models/bateria_exame-model');
const Cid = require('./models/cid-model');
const Convenio = require('./models/convenio-model');
const DiasSessao = require('./models/dias_sessao-model');
const Esquema = require('./models/esquema-model');
const EvolucaoClinica = require('./models/evolucao_clinica-model');
const Exame = require('./models/exame-model');
const ExameFisico = require('./models/exame_fisico-model');
const Funcao = require('./models/funcao-model');
const Hemodialise = require('./models/hemodialise-model');
const HistoricoTratamento = require('./models/historico_tratamento-model');
const Hospitalizacao = require('./models/hospitalizacao-moodel');
const Laboratorio = require('./models/laboratorio-model');
const Mensagem = require('./models/mensagem-model');
const Paciente = require('./models/paciente-model');
const PacienteHasCid = require('./models/paciente_has_cid-model');
const PedidoExame = require('./models/pedido_exame-model');
const StatusMensagem = require('./models/status_mensagem-model');
const TipoCapilar = require('./models/tipo_capilar-model');
const TipoExame = require('./models/tipo_exame-model');
const TipoMensagem = require('./models/tipo_mensagem-model');
const Usuario = require('./models/usuario-model');
const UsuarioHasFuncao = require('./models/usuario_has_funcao-model');

const express = require('express')
const app = express()
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'public')))

app.use(express.json())

app.post('/register', async (req, res) => {
    let {nome, email, login, senha, ativo} = req.body

    try {
        const resultado = await database.sync();
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocorreu um erro inesperado')
    }

    try {

        let emailExiste = await Usuario.findOne({ 
            where: { 
                email: email
            } 
        })

        if (emailExiste) {
            return res.status(400).send("Email já existe");
        }

        const result = await Usuario.create({
            nome, login, senha, ativo, email
        })

        res.status(200).send('Usuário registrado com sucesso!')

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocorreu um erro inesperado')
    }
})

app.listen(3000, (req, res) => {
    console.log('Rodando na porta 3000')
})