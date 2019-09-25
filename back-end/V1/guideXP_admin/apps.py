from django.apps import AppConfig


class GuidexpAdminConfig(AppConfig):
    name = 'guideXP_admin'

    def ready(self):
        import guideXP_admin.signals

