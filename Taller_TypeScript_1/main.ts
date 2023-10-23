
import { Serie } from './serie.js';
import { dataSerie } from './data.js';

let seriesTable: HTMLElement = document.getElementById('series')!;

loadDataSeries(dataSerie);
averageSeasons(dataSerie);
console.log(dataSerie);

function loadDataSeries(series: Serie[]): void {
    series.forEach(serie => {
        let tr: HTMLElement = document.createElement('tr');
        tr.innerHTML = `
        <td><b>${serie.id}</b></td>
        <td><a href="${serie.website}" target="_blank">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        seriesTable.querySelector('tbody')?.appendChild(tr);
    });
}

function averageSeasons(series: Serie[]): void {
    let sum: number = 0;
    series.forEach(serie => {
        sum += serie.seasons;
    });
    let average: number = sum / series.length;
    let roundedAverage: number = Math.round(average * 100) / 100;
    let averageSeasons: HTMLElement = document.getElementById('seasons')!;
    averageSeasons.innerHTML = `<b>Seasons average:</b> ${roundedAverage}`;
}
