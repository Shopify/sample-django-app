from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View
from django.apps import apps


class HomeView(View):
    def get(self, request, *args, **kwargs):
        try:
            return render(
                request,
                "home/index.html",
                {
                    "shop_origin": request.GET.get("shop"),
                    "api_key": apps.get_app_config("shopify_app").SHOPIFY_API_KEY,
                },
            )
        except KeyError:
            return redirect(reverse("login"))
