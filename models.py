from exts import db
from datetime import datetime
from flask_login import UserMixin


class User(UserMixin, db.Model):
    __tablename__ = 'user'
    user_email = db.Column(db.CHAR(200), primary_key=True, nullable=False, unique=True)
    user_name = db.Column(db.CHAR(200), nullable=False, unique=False)
    user_password = db.Column(db.CHAR(200), nullable=False)

    def get_id(self):
        return self.user_email


class EmailCaptchaModel(db.Model):
    __tablename__ = "email_captcha"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.CHAR(100), nullable=False, unique=True)
    captcha = db.Column(db.CHAR(10), nullable=False)
    create_time = db.Column(db.DateTime, default=datetime.now)






