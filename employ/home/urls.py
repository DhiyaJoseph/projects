
from django.urls import path,include
from .import views

urlpatterns = [
    path('', views.index,name='home'),
    path('about',views.about,name='about'),
    path('services',views.services,name='services'),
    path('employpath',views.employpath,name='employ'),
    path('employadd',views.employadd,name='employadd'),
    path('add-emp/', views.add_emp, name='add-emp'),
    path('delete-emp/<int:id>', views.deletedata, name='delete-emp'),
    path('update/<id>', views.update, name='update-emp'),
    path('update-emp/<id>', views.update, name='update-emp'),


]
