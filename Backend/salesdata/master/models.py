from django.db import models

# Create your models here.
class Header_table(models.Model):
      var_no=models.AutoField(primary_key=True)
      ac_name=models.CharField(max_length=100,null=True)
      ac_amount=models.IntegerField(null=True)
      status=models.CharField(max_length=100,null=True)
      
      var_date=models.DateTimeField(null=True) 
      def __str__(self):
            return self.ac_name

class Detail_table(models.Model):
      
      sr_no=models.AutoField(primary_key=True)
      var_no=models.IntegerField(null=True)
      item_code=models.CharField(max_length=100,null=True)
      item_name=models.CharField(max_length=100,null=True)
      description=models.CharField(max_length=1000,null=True)
      qut=models.IntegerField(max_length=100,null=True)
      
      rate=models.IntegerField(null=True) 
      amount=models.IntegerField(null=True) 
      def __str__(self):
            return self.item_code
class Item_Master(models.Model):
      Id=models.AutoField(primary_key=True) 
      var_no=models.IntegerField(null=True)
      detail_data= models.JSONField(null=True,blank=True)  
     
      def __str__(self):
          return str(self.Id)
class Flage_field(models.Model):
      id=models.AutoField(primary_key=True)
      button_flag=models.CharField(max_length=100,default=False)
      def __str__(self):
          return str(self.button_flag)  