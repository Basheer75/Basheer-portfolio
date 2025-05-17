from django.shortcuts import render
from django.contrib import messages
from Base.models import Contact

def contact(request):
    if request.method == "POST":
        print('POST request received')

        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        content = request.POST.get('content', '').strip()
        number = request.POST.get('number', '').strip()

        print(f"Received: {name}, {email}, {number}, {content}")

        if not (2 <= len(name) <= 30):
            messages.error(request, 'Name should be between 2 and 30 characters.')
            return render(request, 'Base/home.html')

        if not (3 <= len(email) <= 50):
            messages.error(request, 'Please enter a valid email.')
            return render(request, 'Base/home.html')

        if not (7 <= len(number) <= 13):
            messages.error(request, 'Please enter a valid phone number.')
            return render(request, 'Base/home.html')

        if not content:
            messages.error(request, 'Message content cannot be empty.')
            return render(request, 'Base/home.html')

        contact_entry = Contact(name=name, email=email, number=number, content=content)
        contact_entry.save()
        messages.success(request, 'Thank you for contacting me. Your message has been saved.')
        print('Saved to database.')

    return render(request, 'Base/home.html')
