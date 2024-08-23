from django.urls import path
from .views import BookListAPIView,\
      BookDetalView, BookDeleteView, \
        BookUpdateView, BookCreateApiView,\
         BookListCreateApiView, BookDeleteUpdateView,\
         BookViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('books', BookViewSet, basename='books')

urlpatterns = [
    # path('books/', BookListAPIView.as_view()),
    # path('booklistcreate/', BookListCreateApiView.as_view()),
    # path('bookupdatedelete/<int:pk>/', BookDeleteUpdateView.as_view()),
    # path('books/create/', BookCreateApiView.as_view()),
    # path('books/<int:pk>/', BookDetalView.as_view()),
    # path('books/<int:pk>/delete/', BookDeleteView.as_view()),
    # path('books/<int:pk>/update/', BookUpdateView.as_view()),
    
    # path('books/books/', book_list_view)
]

urlpatterns += router.urls