import React from 'react';
import { Chart } from "react-google-charts";
import { Grid, Container } from '@material-ui/core'
import { GrafStyle } from './styles';

function Graficos() {
  return (

<GrafStyle>
  <Container fixed>
  <div className="root">
   <Grid container spacing={3}>
   <Grid item xs={6}>
   <Chart className= "border"
          width={650}
          height={360}
          chartType = "BarChart"
          loader={<div> Gerando  Gráficos... </div>}
          data= {[
            ['Empresa', 'Em estoque', 'Movimentado'],
            ['empresa A',   2000,          250],
            ['empresa B',   5000,          900 ],
            ['empresa C',   4200,          3000],
            ['empresa D',   9000,          7500],
            ['empresa E',   2500,          550 ],
            ['empresa F',   1260,          490],
            ['empresa G',   1242,          250],
            ['empresa H',   650,          900 ],
            ['empresa I',   2750,          1500],

          ]}

          options={{
          title: 'Gráfico de Movimentação',
          chartArea: { width: '40%'},
          hAxis: {
            title: 'Movimentações',
            minValue: 0
            },
          vAxis: {
            title: 'Empresas',
            },
          }}
          />
         
    </Grid>
    <Grid item xs={6}>
    <Chart className= "border"
           width={630}
           height={360}
           chartType="PieChart"
           data={[
                 ['Empresa', 'Qntd.Produtos'],
                 ['A',            2000],
                 ['B',            5000],
                 ['C',            4200],
                 ['D',            9000], 
                 ['E',             2500], 
                 ['F',            1260],
                 ['G',            1242],
                 ['H',            650],
                 ['I',            2750]
               ]}
               options={{
               title: 'Estoque',
               is3D: true,
               }}
               rootProps={{ 'data-testid': '7' }}
             />
    </Grid>
    <Grid item xs={12}>
    <Chart className= "border"
          width={650}
          height={360}
          chartType="LineChart"
          data={[
              ['Dia', 'Movimentação'],
              [1,           0],
              [2,         110],
              [3,         223],
              [4,         137],
              [5,         158],
              [6,          97],
              [7,         191],
              [8,         271],
              [9,         338],
              [10,        404],
              [11,        324],
              [12,        353],
              [13,        232],
              [14,        110],
              [15,        239],
              [16,        171],
              [17,        189],
              [18,        900],
              [19,        1000],
              [20,        2700],
              [21,        3300],
              [22,        4000],
              [23,        4532],
              [24,        4735],
              [25,        7823],
              [26,        9042],
              [27,        10050],
              [28,        11118],
              [29,        12200],
              [30,        12250],
            ]}
            options={{
              hAxis: {
              title: 'Movimento dos últimos 30 dias',
              },
              vAxis: {
              title: 'Movimentação',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
 </Grid>
 </Grid>
 </div>
 </Container>
 </GrafStyle>
  )
}

export default Graficos;
