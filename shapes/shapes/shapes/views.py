from django.http import HttpResponse


def home_page(request):
    return HttpResponse("Welcome to Home!")


def about_page(request):
    return HttpResponse("ABOUT PAGE")
