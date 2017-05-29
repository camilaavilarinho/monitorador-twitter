from django.contrib.auth.decorators import login_required
from django.shortcuts import render

#não está autenticando pq não consegue acessar o user do model
@login_required
def home(request):
    return render(request, 'exampleapp/home.html')
