window.onload = readTextFile("../json/data.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    buildPage(data);
});
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var hp_segment = '<div class=\"hp-segment col\"> &shy;</div>';
var shield_segment = '<div class=\"shield-segment col\"> &shy;</div>';
function buildPage(data_array)
{
    var heroes_list =  document.getElementById("heroes_data");
    for (let i = 0; i < data_array.length; i++)
    {
        if (data_array[i].role == "damage_dealer") 
        {
            var role_image_url = "../img/dd-icon.png";
        }
        else if (data_array[i].role == "support") 
        {
            var role_image_url = "../img/support-icon.png";
        }
        else if (data_array[i].role == "tank") 
        {
            var role_image_url = "../img/tank-icon.png";
        }
        console.log(i);
       heroes_list.innerHTML +=`
        <div class="col-12 card pl-0 pr-0 mt-5 mb-5">
                <div class="card-body front hero-card p-0">

                    <img class="card-img " style="height:100%;"
                        src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613275280_199-p-sinii-fon-rombi-245.jpg"
                        alt="">
                    <div class="card-img-overlay white-gradient row no-gutters pb-0">
                        <div class="col-6">

                            <div class="row no-gutters flex-column">
                                <div class="col-10 hero-name mt-3 pb-2 pl-4">
                                    <span class=" pr-3">${data_array[i].hero_name}</span><img src="${role_image_url}" alt="">
                                </div>
                                <div class="row col-10 stats-container no-gutters ml-4">
                                    <div class="col-12">
                                        <div class="row no-gutters stat-bar">
                                            <div class="col-9 row hp-bar no-gutters">
                                                ${hp_segment.repeat(parseInt(data_array[i].base_health)/25)}
                                                ${shield_segment.repeat(parseInt(data_array[i].base_shields)/25)}
                                            </div>
                                            <div class="col-3 hp-value pl-3">${parseInt(data_array[i].base_health)+parseInt(data_array[i].base_shields)} HP</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 hero-desc pb-3 pt-3 pl-4 pr-4 ml-3 ">${data_array[i].description}</div>
                            </div>
                        </div>
                        <img class="card-img col-6"
                            style="width:100%; height:100%;object-fit:contain; object-position:bottom; "
                            src="${data_array[i].portrait_image_url}" alt="alt-title">
                    </div>




                </div>











                <div class="card-body back hero-card p-0">

                    <img class="card-img " style="height:100%;"
                        src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613275280_199-p-sinii-fon-rombi-245.jpg"
                        alt="">
                    <div class="card-img-overlay white-gradient row no-gutters pb-0">
                        <img class="card-img col-6"
                            style="width:100%; height:100%; transform:scaleX(-1); object-fit:contain; object-position:bottom; "
                            src="${data_array[i].portrait_image_url}" alt="alt-title">
                        <div class="col-6">

                            <div class="row no-gutters flex-column align-items-end">
                                <div
                                    class="col-10 hero-name mt-3 pb-2 pr-4 d-flex justify-content-end align-items-center">
                                    <span class=" pr-3">${data_array[i].hero_name}</span> <img src="${role_image_url}" alt="">
                                </div>


                            </div>
                            <div class="row no-gutters justify-content-center">
                                <div class="col-6 d-flex flex-row  mt-3 pb-2 pr-0 ">
                                    <div class="statistics-title col text-right">Время в игре: </div>
                                    <div class="statistics-value col-4">${data_array[i].playtime}</div>

                                </div>
                                <div class="col-6 d-flex flex-row mt-3 pb-2 pr-0 ">
                                    <div class="statistics-title col text-right">Время в ударе: </div>
                                    <div class="statistics-value col-4">${data_array[i].firetime}</div>

                                </div>
                                <div class="col-6 d-flex flex-row  mt-3 pb-2 pr-0 ">

                                    <div class="statistics-title col text-right">Всего игр: </div>
                                    <div class="statistics-value col-4">${data_array[i].matches_played}</div>

                                </div>
                                <div class="col-6 d-flex flex-row  mt-3 pb-2 pr-0 ">

                                    <div class="statistics-title col text-right">Побед: </div>
                                    <div class="statistics-value col-4">${data_array[i].matches_won}</div>

                                </div>
                               
                                <div class="col-6 d-flex flex-row  mt-3 pb-2 pr-0 ">

                                    <div class="statistics-title col text-right">Процент побед: </div>
                                    <div class="statistics-value col-4">${data_array[i].winrate}%</div>

                                </div>
                                <div class="col-6 d-flex flex-row  mt-3 pb-2 pr-0 ">

                                    <div class="statistics-title col text-right">Выполнение задач: </div>
                                    <div class="statistics-value col-4">${data_array[i].task_do_time}</div>

                                </div>

                                <div class="col-6 d-flex flex-row  mt-3 pb-2 pr-0 ">

                                    <div class="statistics-title col text-right">Убийств: </div>
                                    <div class="statistics-value col-4">${data_array[i].kills}</div>

                                </div>
                                <div class="col-6 d-flex flex-row  mt-3 pb-2 pr-0 ">

                                    <div class="statistics-title col text-right">Смертей: </div>
                                    <div class="statistics-value col-4">${data_array[i].death}</div>

                                </div>
                                <div class="col-6 d-flex flex-row  mt-3 pb-2 pr-0 ">

                                    <div class="statistics-title col text-right">${data_array[i].specify_stat_1.stat_name}: </div>
                                    <div class="statistics-value col-4">${data_array[i].specify_stat_1.stat_value}</div>

                                </div>
                                <div class="col-6 d-flex flex-row  mt-3 pb-2 pr-0 ">

                                    <div class="statistics-title col text-right">Золотых медалей: </div>
                                    <div class="statistics-value col-4">${data_array[i].gold_medals}</div>

                                </div>
                                <div class="col-12 d-flex flex-row  mt-3 pb-2 pr-0 ">

                                    <div class="statistics-title col text-right">${data_array[i].specify_stat_2.stat_name}: </div>
                                    <div class="statistics-value col-4">${data_array[i].specify_stat_2.stat_value}</div>

                                </div>
                                <div class="col-12 d-flex flex-row  mt-3 pb-2 pr-0 ">

                                    <div class="statistics-title col text-right">Урона нанесено: </div>
                                    <div class="statistics-value col-4">${data_array[i].damage_dealt}</div>

                                </div>
                            </div>
                        </div>

                    </div>




                </div>
            </div>
        `
    }
}
