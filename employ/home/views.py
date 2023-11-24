from django.shortcuts import render
from .models import Emp 
from django.shortcuts import redirect
from django.shortcuts import get_object_or_404

# Create your views here.
def index(request):
    return render(request,"home.html")

def about(request):
    return render(request,"about.html")

def services(request):
    return render(request,"services.html")

def employpath(request):
    viewemploy = Emp.objects.all()
    return render(request, "emp/home.html", {"emps": viewemploy})
    

    
def employadd(request):
    return render(request,"emp/add_emp.html")


def add_emp(request):
    if request.method == 'POST':

        name = request.POST.get('emp_name')
        emp_id = request.POST.get('emp_id')
        phone = request.POST.get('emp_phone')
        address = request.POST.get('emp_address')
        working = request.POST.get('emp_working', False) 
        department = request.POST.get('emp_department')

       
        emp_instance = Emp.objects.create(
            name=name,
            emp_id=emp_id,
            phone=phone,
            address=address,
            working=working,
            department=department
        )
        emp_instance.save()

    
    employdetails = {
        "details": Emp.objects.all()
    }

    return render(request, "emp/employ_details.html", employdetails)

def deletedata(request, id):
    try:
        delt = get_object_or_404(Emp, id=id)
        delt.delete()
    except Emp.DoesNotExist:
       
        pass

    return redirect("employ")


def update(request,id):
    obj=Emp.objects.get(id=id)
    if request.method == 'POST':

        name = request.POST.get('emp_name')
        emp_id = request.POST.get('emp_id')
        phone = request.POST.get('emp_phone')
        address = request.POST.get('emp_address')
        working = request.POST.get('emp_working', False) 
        department = request.POST.get('emp_department')
        working=working=='on'

        edit=Emp.objects.get(id=id)
        edit.name=name
        edit.emp_id=emp_id
        edit.phone=phone
        edit.address=address
        edit.working=working
        edit.department=department

        edit.save()
    return render(request,"emp/update_emp.html",{"object":obj})

