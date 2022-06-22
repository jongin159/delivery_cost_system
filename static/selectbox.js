

function onLoadFunc() {
    console.log('test')
 }

 function change_start_city(small_city_dict) {
    console.log('change');

    var start_big_city = document.getElementById("start_big_city");
    var selectValue = start_big_city.options[start_big_city.selectedIndex].text;

    var _small_city_dict = small_city_dict;

    console.log(selectValue);
    console.log(_small_city_dict);
    console.log(_small_city_dict[selectValue]);

    var start_small_city = document.getElementById("start_small_city");
    start_small_city.options.length = 0;
    var option = document.createElement('option');
    option.innerText = "시/군/구"
    start_small_city.append(option)

    for (var i = 0; i < _small_city_dict[selectValue].length; i++) {
        var option = document.createElement('option');
        option.innerText = _small_city_dict[selectValue][i]
        start_small_city.append(option)
    }
 }

 function change_dest_city(small_city_dict) {
    console.log('change');

    var dest_big_city = document.getElementById("dest_big_city");
    var selectValue = dest_big_city.options[dest_big_city.selectedIndex].text;

    var _small_city_dict = small_city_dict;

    console.log(selectValue);
    console.log(_small_city_dict);
    console.log(_small_city_dict[selectValue]);

    var dest_small_city = document.getElementById("dest_small_city");
    dest_small_city.options.length = 0;
    var option = document.createElement('option');
    option.innerText = "시/군/구"
    dest_small_city.append(option)

    for (var i = 0; i < _small_city_dict[selectValue].length; i++) {
        var option = document.createElement('option');
        option.innerText = _small_city_dict[selectValue][i]
        dest_small_city.append(option)
    }
 }

 function get_cost(cost_list) {
    console.log('get cost');
    console.log(cost_list);

    var start_big_city = document.getElementById("start_big_city");
    var start_small_city = document.getElementById("start_small_city");
    var dest_big_city = document.getElementById("dest_big_city");
    var dest_small_city = document.getElementById("dest_small_city");

    var start_big_city_Value = start_big_city.options[start_big_city.selectedIndex].text;
    var start_small_city_Value = start_small_city.options[start_small_city.selectedIndex].text;
    var dest_big_city_Value = dest_big_city.options[dest_big_city.selectedIndex].text;
    var dest_small_city_Value = dest_small_city.options[dest_small_city.selectedIndex].text;

    for (var i = 0; i < cost_list.length; i++) {
        console.log('start_big_city_Value : ' + start_big_city_Value)
        console.log('cost_list[i][0] : ' + cost_list[i][0])

        if (!start_big_city_Value.includes(cost_list[i][0]) && !cost_list[i][0].includes(start_big_city_Value)) {
            continue;
        }
//        if (start_big_city_Value != cost_list[i][0]) {
//            continue;
//        }

        console.log('start_small_city_Value : ' + start_small_city_Value)
        console.log('cost_list[i][1] : ' + cost_list[i][1])


        if (!start_small_city_Value.includes(cost_list[i][1]) && !cost_list[i][1].includes(start_small_city_Value)) {
            continue;
        }
//        if (start_small_city_Value != cost_list[i][1]) {
//            continue;
//        }

        console.log('dest_big_city_Value : ' + dest_big_city_Value)
        console.log('cost_list[i][2] : ' + cost_list[i][2])


        if (!dest_big_city_Value.includes(cost_list[i][2]) && !cost_list[i][2].includes(dest_big_city_Value)) {
            continue;
        }
//        if (dest_big_city_Value != cost_list[i][2]) {
//            continue;
//        }

        console.log('dest_small_city_Value : ' + dest_small_city_Value)
        console.log('cost_list[i][3] : ' + cost_list[i][3])

        if (!dest_small_city_Value.includes(cost_list[i][3]) && !cost_list[i][3].includes(dest_small_city_Value)) {
            continue;
        }
//        if (dest_small_city_Value != cost_list[i][3]) {
//            continue;
//        }

        console.log('1234')
        var cost = cost_list[i][4];
        console.log("inner cost:" + cost)
        break;
    }

    console.log('start_big_city_Value:' +start_big_city_Value)
    var price = document.getElementById("price");
//    console.log(cost)
    console.log(start_big_city_Value)
    if (cost) {
        price.innerHTML = cost;
        alert(start_big_city_Value + " " + start_small_city_Value + "에서 " + dest_big_city_Value + " " + dest_small_city_Value + "까지 견적은 " + cost + "입니다");

    }
    else if (start_big_city_Value == "시/도"){
        price.innerHTML = "출발지 시/도를 선택해주세요";
        alert("출발지 시/도를 선택해주세요");
    }
    else if (start_small_city_Value == "시/군/구"){
        price.innerHTML = "출발지 시/군/구를 선택해주세요";
        alert("출발지 시/군/구를 선택해주세요");
    }
    else if (dest_big_city_Value == "시/도"){
        price.innerHTML = "도착지 시/도를 선택해주세요";
        alert("도착지 시/도를 선택해주세요");
    }
    else if (dest_small_city_Value == "시/군/구"){
        price.innerHTML = "도착지 시/군/구를 선택해주세요";
        alert("도착지 시/군/구를 선택해주세요");
    }
    else {
        price.innerHTML = "가격 정보 없음";
        alert("가격 정보 없음");
    }

 }