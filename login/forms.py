from django import forms
# from .models import Arts

class login_form(forms.Form):
    Username = forms.CharField(label="username",max_length=20,widget=forms.TextInput(attrs={'class': 'form-control'}))
    Password = forms.CharField(label="password",max_length=100,widget=forms.TextInput(attrs={'class': 'form-control'}))


class register_form(forms.Form):
    Username = forms.CharField(label="username", max_length=20, widget=forms.TextInput(attrs={'class': 'form-control'}))
    Password = forms.CharField(label="password", max_length=100,
                               widget=forms.TextInput(attrs={'class': 'form-control'}))
    Password_confirm = forms.CharField(label="confirm password", max_length=100,widget=forms.TextInput(attrs={'class': 'form-control'}))
    # Email = forms.EmailField(label="email",max_length=100,weight = forms.EmailField(attrs={'class': 'form-control'}))
    # date = forms.TimeField()


# class art_form(forms.Form):
# #     # class meta:
# #     #     model = Arts
# #     #     fields = "_all_"
#     title = forms.CharField(label="title", max_length=20, widget=forms.TextInput(attrs={'class': 'form-control'}))
#     content = forms.CharField(label="content", max_length=100,
#                                widget=forms.TextInput(attrs={'class': 'form-control'}))
#     pics = forms.FileField(max_length=255)
