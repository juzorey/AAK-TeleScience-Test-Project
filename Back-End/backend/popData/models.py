from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class PopDataTable(models.Model):
  Age_Group = models.CharField(_("Age_Group"), max_length=200)
  Male_Estimate = models.BigIntegerField(_("Male_Estimate"))
  Percent_Male_Estimate = models.FloatField(_("Percent_Male_Estimate"))
  Female_Estimate = models.BigIntegerField(_("Female_Estimate"))
  Percent_Female_Estimate = models.FloatField(_("Percent_Female_Estimate"))

  def __str__(self):
    return self.Age_Group