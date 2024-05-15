from rest_framework.serializers import ModelSerializer
from popData.models import PopDataTable


class PopDataTableSerializer(ModelSerializer):
    class Meta:
        model = PopDataTable
        fields = '__all__' # This will serialize all fields in the model