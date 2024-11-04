from rest_framework import serializers
from .models import Header_table,Detail_table,Item_Master,Flage_field
class Header_serializer(serializers.ModelSerializer):
                    class Meta:
                       model=Header_table
                       fields="__all__"
class Detail_serializer(serializers.ModelSerializer):
                    class Meta:
                       model=Detail_table
                       fields="__all__"                       
class ITEM_serializer(serializers.ModelSerializer):
                    class Meta:
                       model=Item_Master
                       fields="__all__"  
class Flag_serializer(serializers.ModelSerializer):
                    class Meta:
                       model=Flage_field
                       fields="__all__"                                                                                                                 