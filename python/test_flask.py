from app import app

def test_init_page():
    resp = app.test_client().get('/')
    assert response.status_code == 200

def test_about_page():
    resp = app.test_client().get('/about')
    assert response.status_code == 200