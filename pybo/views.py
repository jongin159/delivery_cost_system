from django.shortcuts import render
from .models import Cost, City_Info


def index(request):
    cost_list = Cost.objects.order_by('from_address_1')
    address_list = City_Info.objects.order_by('address_1')

    # 시/도 리스트
    big_city_list = []
    # 시/도별 시/군/구 dict
    small_city_dict = {}

    temp_list = []
    for big_city in address_list:
        print(big_city.address_1)
        if big_city.address_1 not in big_city_list:
            temp_list = []
            big_city_list.append(big_city.address_1)
            temp_list.append(big_city.address_1)

        temp_list.append(big_city.address_2)

        if len(temp_list) > 0:
            small_city_dict[temp_list[0]] = temp_list[1:]

    print(small_city_dict)


    print(big_city_list)

    cost_info_list = []

    for cost_info in cost_list:
        for sm_city_start in cost_info.from_address_2.replace(" ", "").split(','):
            for sm_city_dest in cost_info.to_address_2.replace(" ", "").split(','):
                temp_list = []
                temp_list.append(cost_info.from_address_1)
                temp_list.append(sm_city_start)
                temp_list.append(cost_info.to_address_1)
                temp_list.append(sm_city_dest)
                temp_list.append(cost_info.cost)

                cost_info_list.append(temp_list)

        # temp_list = []
        # temp_list.append(cost_info.from_address_1)
        # temp_list.append(cost_info.from_address_2)
        # temp_list.append(cost_info.to_address_1)
        # temp_list.append(cost_info.to_address_2)
        # temp_list.append(cost_info.cost)
        #
        # cost_info_list.append(temp_list)

    print(cost_info_list)

    context = {'cost_info_list': cost_info_list, 'big_city_list': big_city_list, 'small_city_dict':small_city_dict}
    return render(request, 'pybo/main.html', context)