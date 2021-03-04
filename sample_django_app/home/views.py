from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View
from django.apps import apps
from django.views.decorators.clickjacking import xframe_options_exempt

class HomeView(View):
  @xframe_options_exempt
  def get(self, request, *args, **kwargs):
    context = {
      "shop_origin": request.GET.get("shop"),
      "api_key": apps.get_app_config("shopify_app").SHOPIFY_API_KEY,
    }
    try:
      return render(request, "home/index.html", context)
    except KeyError:
      return redirect(reverse("login"))
