import $ from 'jquery';


//api.openweathermap.org/data/2.5/forecast?q={plovdiv},{bg}&appid=f6224f4e159032e43fc0aed6fa19f4c5
const WeatherRequester = (function () {
    const baseUrl = '//api.openweathermap.org/data/2.5/forecast?q=';
    const appKey = 'f6224f4e159032e43fc0aed6fa19f4c5';


    function getTownInfoByTown(town) {
        return $.ajax(
            {
                method:"GET",
                url:`${baseUrl}{${town}},{bg}&appid=${appKey}`,
                data:JSON.stringify(town)
            }
        )
    }

    return {
        getTownInfoByTown
    }
})();

export  default WeatherRequester;