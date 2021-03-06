/*!
 * sc4node
 *
 * Copyright (C) 2011  Kenichi Kanai
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 
/**
 * Start sclang process and returns sclang instance.
 *
 * @param {String} pathSclang path to sclang
 * @param {Function(Buffer)} handler stdout handler
 * @api public
 */
exports.start = function (pathSclang, handler) {
  return new exports.Sclang(pathSclang, handler);
};

/**
 * Sclang constructor.
 *
 * @api public
 */
exports.Sclang = require('./sclang');