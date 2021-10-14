from flaskr import server

def test_init_page():
    resp = server.app.test_client().get('/')
    assert resp.status_code == 200

def test_about_page():
    resp = server.app.test_client().get('/about')
    assert resp.status_code == 200