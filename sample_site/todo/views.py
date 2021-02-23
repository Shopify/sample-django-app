from django.shortcuts import render
from rest_framework import viewsets
from django.http import HttpResponse, JsonResponse
from django.views import View

class TodoView(View):
    def get(self, request, *args, **kwargs):
        return JsonResponse({ 'data': 'Hello, World!' })
