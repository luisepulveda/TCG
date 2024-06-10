from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import usuarioViewSet,libroViewSet,boletaViewSet,detalle_boletaViewSet

router = DefaultRouter()
router.register(r"usuario",usuarioViewSet)
router.register(r"libro",libroViewSet)
router.register(r"boleta",boletaViewSet)
router.register(r"detalle_boleta",detalle_boletaViewSet)
urlpatterns = [
    path('',include(router.urls)),
]
