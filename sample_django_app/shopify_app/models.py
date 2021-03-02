from django.db import models


class Shop(models.Model):
    shopify_domain = models.CharField(max_length=255)
    shopify_token = models.CharField(max_length=255)
    access_scopes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "id: %d, shop: %s, token: %s, access_scopes: %s" % (self.pk, self.shopify_domain, self.shopify_token, self.access_scopes)