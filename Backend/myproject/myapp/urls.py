from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import usuarioViewSet, libroViewSet, boletaViewSet, detalle_boletaViewSet, UserViewSet

router = DefaultRouter()
router.register(r'usuarios', usuarioViewSet)
router.register(r'libros', libroViewSet)
router.register(r'boletas', boletaViewSet)
router.register(r'detalle_boletas', detalle_boletaViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]