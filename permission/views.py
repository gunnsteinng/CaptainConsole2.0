from django.shortcuts import render, redirect

from permission.forms import SignUpForm

# Create your views here.
def register(request):
    if request.method == 'POST':
        form = SignUpForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    return render(request, 'permission/register.html', {
        'form': SignUpForm()
    })