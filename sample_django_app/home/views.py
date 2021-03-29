from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View
from django.apps import apps
from django.views.decorators.clickjacking import xframe_options_exempt
from shopify_app.decorators import known_shop_required


class HomeView(View):
    @xframe_options_exempt
    @known_shop_required
    def get(self, request, *args, **kwargs):
        context = {
            "shop_origin": kwargs.get("shopify_domain"),
            "api_key": apps.get_app_config("shopify_app").SHOPIFY_API_KEY,
        }
        return render(request, "home/index.html", context)
