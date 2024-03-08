from backend import serialize
from backend.models import DetailsModel
from backend.serialize import DetailsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class DetailsView(APIView):
    def get(self, request):
        detailsObj = DetailsModel.objects.all()
        detailsSerializeObj = DetailsSerializer(detailsObj, many=True)
        return Response(detailsSerializeObj.data)


class DetailsAddRecordView(APIView):
    def post(self, request):
        serializeObj = DetailsSerializer(data=request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response(200)
        return Response(serializeObj.errors)


class DetailsUpdate(APIView):
    def post(self, request, pk):
        try:
            detailsObj = DetailsModel.objects.get(pk=pk)
        except:
            return Response("Couldn't find details")
        serializeObj = DetailsSerializer(detailsObj, data=request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response(200)
        return Response(serializeObj.errors)


class DetailsDelete(APIView):
    def post(self, request, pk):
        try:
            detailsObj = DetailsModel.objects.get(pk=pk)
        except:
            return Response("Couldn't find details")
        detailsObj.delete()
        return Response(200)
