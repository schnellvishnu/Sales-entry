from django.shortcuts import render
from .models import Header_table,Detail_table,Item_Master,Flage_field
from rest_framework.views import APIView
from .serializers import Header_serializer,Detail_serializer,ITEM_serializer,Flag_serializer
from rest_framework.response import Response
from django.db.models import Sum
# Create your views here.
class Headerview(APIView):
      def get(self,request):
            detailobj=Header_table.objects.all()
            serializeobj=Header_serializer(detailobj,many=True)
            return Response(serializeobj.data)
      def post(self,request):
            serializeobj=Header_serializer(data=request.data)
            if(serializeobj.is_valid()):
                  serializeobj.save()
                  return Response(200)
            return Response(serializeobj.errors)

class Detailsview(APIView):
      def get(self,request):
            detailobj=Detail_table.objects.all()
            # obj=Detail_table.objects.values('amount') 
           
            serializeobj=Detail_serializer(detailobj,many=True)
            # k=[]
            # res = 0
            # for i in obj:
                
            # #      print(i['amount']) 
            #      j=i['amount']
            #      res += j
            #      k.append(j)
            # print(res)
           
                                  
            return Response(serializeobj.data)
      def post(self,request):
            serializeobj=Detail_serializer(data=request.data)
            if(serializeobj.is_valid()):
                  serializeobj.save()
                  return Response(200)
            return Response(serializeobj.errors)
      
class Delete_Detailsview(APIView):
      def delete(self,request,id):
            obj=Detail_table.objects.get(sr_no=id)
            obj.delete()
            return Response(200)    
class All_Detail_Deleteview(APIView):
      def delete(self,request):
            obj=Detail_table.objects.all()
            obj.delete()
            return Response(200)          
class Delete_Headerview(APIView):
      def delete(self,request):
            obj=Header_table.objects.all()
            obj.delete()
            return Response(200)  
      
class Itemview(APIView):
      def get(self,request):
            detailobj=Item_Master.objects.all()
            serializeobj=ITEM_serializer(detailobj,many=True)
            return Response(serializeobj.data)
      def post(self,request):
            serializeobj=ITEM_serializer(data=request.data)
            if(serializeobj.is_valid()):
                  serializeobj.save()
                  return Response(200)
            return Response(serializeobj.errors)   
class Delete_Itemview(APIView):
      def delete(self,request):
            obj=Item_Master.objects.all()
            obj.delete()
            return Response(200) 
      
class Flageview(APIView):
      def get(self,request):
            detailobj=Flage_field.objects.all()
            serializeobj=Flag_serializer(detailobj,many=True)
            return Response(serializeobj.data)
      def post(self,request):
            serializeobj=Flag_serializer(data=request.data)
            button_st=request.data.get("button_flag")
            detailobj=Flage_field.objects.filter(id=1).update(button_flag=button_st)
            # if(serializeobj.is_valid()):
            #       serializeobj.save()
            #       return Response(200)
            return Response(200) 
      
class Flageindividualview(APIView):
      def get(self,request,id):
            detailobj=Flage_field.objects.filter(id=id)
            serializeobj=Flag_serializer(detailobj,many=True)
            return Response(serializeobj.data)                               