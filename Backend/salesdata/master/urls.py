from django.urls import path
from master import views
urlpatterns = [
    path("header/",views.Headerview.as_view()), 
    path("details/",views.Detailsview.as_view()),
    path("details-delete/<id>",views.Delete_Detailsview.as_view()), 
    path("all-detail-delete/",views.All_Detail_Deleteview.as_view()), 
    path("header-delete/",views.Delete_Headerview.as_view()), 
    path("item-data/",views.Itemview.as_view()),
    path("item-delete/",views.Delete_Itemview.as_view()),
    
    path("flag/",views.Flageview.as_view()),
    path("flagind/<id>",views.Flageindividualview.as_view()),                          
]