from flask import Flask, jsonify
from wtforms import ValidationError
import config
from flask_login import LoginManager
from flask_migrate import Migrate
from exts import db, mail
import os
from blueprints import user_bp
from models import User

# 创建一个app对象
app = Flask(__name__, template_folder="templates/dist", static_folder="templates/dist", static_url_path="")

# app.config[] 配置 配置项全部放到config里
app.config.from_object(config)
db.init_app(app)
mail.init_app(app)
# 配置数据库迁移
migrate = Migrate(app, db)
# 配置项目蓝图
app.register_blueprint(user_bp)

# 配置session secret_key
app.secret_key = os.getenv("SECRET_KEY", "dskjfwqienkehyr1")

# 配置LoginManager
login_manager = LoginManager()
login_manager.login_message_category = 'info'
login_manager.login_message = 'Access denied'

# 要求登录界面未登陆会跳转到以下界面
login_manager.login_view = '/user/login'
login_manager.init_app(app)


# 登录的回调函数
@login_manager.user_loader
def load_user(user_email):
    if User.query.filter_by(user_email=user_email).first() is not None:
        curr_user = User()
        curr_user.user_email = user_email
        return curr_user


@app.errorhandler(ValidationError)
def validation_error(e):
    return jsonify({"code": 400, "message": e.args})


if __name__ == '__main__':
    app.run()
