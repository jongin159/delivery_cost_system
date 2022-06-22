from django.contrib import admin
from .models import Cost, City_Info

class CostAdmin(admin.ModelAdmin):
    search_fields = ['from_address_1']

class CityInfoAdmin(admin.ModelAdmin):
    search_fields = ['address_1']


admin.site.register(City_Info, CityInfoAdmin)
admin.site.register(Cost, CostAdmin)


# Register your models here.
