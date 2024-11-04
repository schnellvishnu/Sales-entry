from django.contrib import admin
from .models import Header_table,Detail_table,Item_Master,Flage_field
# Register your models here.
admin.site.register(Header_table)
admin.site.register(Detail_table)
admin.site.register(Item_Master)
admin.site.register(Flage_field)