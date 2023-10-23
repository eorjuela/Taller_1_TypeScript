
import { dataSerie } from './data.js';

var seriesTable = document.getElementById('series');
loadDataSeries(dataSerie);
averageSeasons(dataSerie);
console.log(dataSerie);

function loadDataSeries(series) {
    series.forEach(function (serie) {
        var tr = document.createElement('tr');
        tr.innerHTML = `
        <td><b>${serie.id}</b></td>
        <td><a href="${serie.website}" target="_blank">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        seriesTable.querySelector('tbody').appendChild(tr);
    });
}

function averageSeasons(series) {
    var sum = 0;
    series.forEach(function (serie) {
        sum += serie.seasons;
    });
    var average = sum / series.length;
    var roundedAverage = Math.round(average * 100) / 100;
    var averageElement = document.getElementById('seasons');
    averageElement.innerHTML = `<b>Seasons average:</b> ${roundedAverage}`;
}
