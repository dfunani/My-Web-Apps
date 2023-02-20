from django.contrib import admin
from django.contrib.auth import get_user_model
User = get_user_model()
# from realchitchat.extras import delete_realtors_listing_data

admin.site.register(User)