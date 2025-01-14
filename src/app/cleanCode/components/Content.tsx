import { Paper, Box, Divider } from "@mui/material"

export default function Content() {
    return (
        <>
            <Paper elevation={0} square={true} className="basis-1/2 p-8 flex flex-col">
                <Box className="flex flex-col w-full">
                    <Box className="flex justify-between items-center pb-3">
                        <p className="text-stone-500 text-sm"><span className="italic">Clean Code</span> por Robert Cecil Martin (Resumo)</p>
                        <p className="font-extrabold">00</p>
                    </Box>
                    <h1 className="text-3xl font-extrabold">Introdução</h1>
                </Box>
                <Box className="flex flex-col justify-center h-full">
                    <p>
                        Você deve cultivar conhecimentos sobre Princípios, Padrões, Práticas, e Heurísticas que um artesão de código possui, e você também precisa colocar em prática esses conhecimentos. Trabalho duro, não basta apenas saber.
                    </p>
                    <br />
                    <p>
                        O livro é dividido em três partes: 
                    </p>
                    <br />
                    <p>
                        <span className="font-bold">1.</span> Descrição de princípios, padrões, e práticas para escrever códigos limpos. Vários exemplos em código nessa parte.
                    </p>
                    <p>
                        <span className="font-bold">2.</span> Vários estudos de casos na parte 2, cada vez mais complexos. Cada estudo de caso consiste em um exercício de refatoração de código. De acordo com o autor, é a parte mais densa e intricada do livro, exige foco e paciência do leitor, e também revisão de páginas anteriores.
                    </p>

                    <p>
                        <span className="font-bold">3.</span> A recompensa para o leitor está na parte 3. Um único capítulo que contém uma lista de heurísticas e abordagens para refatorar códigos. Todos os motivos para mudanças e o processo de pensamentos e critérios são documentados aqui.
                    </p>
                </Box>
            </Paper>
            <Divider orientation="vertical" className="bg-[#B5B5B5]" flexItem/>
            <Paper elevation={0} square={true} className="basis-1/2 p-8 flex flex-col">
                <Box className="flex justify-center w-full items-center pb-3">
                    <p className="font-extrabold text-sm">PT. 0</p>
                </Box>
                <Box className="flex flex-col justify-center h-full">
                    <p>
                        O autor declara:
                    </p>
                    <br />
                    <p className="italic px-5 text-justify">
                    Se você ler a primeira e a terceira seções e pular os estudos de caso, então você terá lido mais um livro "para se sentir bem" sobre escrever um bom software. Mas se você reservar um tempo para trabalhar nos estudos de caso, seguindo cada pequeno passo, cada decisão minuciosa — se você se colocar no nosso lugar e se forçar a pensar nos mesmos caminhos que nós pensamos, então você ganhará uma compreensão muito mais rica desses princípios, padrões, práticas e heurísticas. Eles não serão mais conhecimento "para se sentir bem". Eles terão sido moídos em seu intestino, dedos e coração. Eles terão se tornado parte de você da mesma forma que uma bicicleta se torna uma extensão de sua vontade quando você domina como pedalá-la.
                    </p>
                </Box>
            </Paper>
        </>
    ) 
}