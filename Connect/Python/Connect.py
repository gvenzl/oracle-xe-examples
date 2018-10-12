#!/usr/bin/env python3
#
# Since: October, 2018
# Author: gvenzl
# Name: Connect.py
# Description: Connect to Oracle Database XE.
#
# Copyright 2018 Gerald Venzl
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

import cx_Oracle

# Connect string format: <username>/<password>@//<hostname>:<port>/<DB name>
conn = cx_Oracle.connect("system/GetStarted18c@//localhost:1521/XEPDB1")
cur = conn.cursor()
cur.execute("SELECT 'Hello World!' FROM dual")
res = cur.fetchall()
print(res)
