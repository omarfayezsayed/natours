const { Tour } = require("../models/tourModel");
class apiFeatures {
  constructor(query, queryString, model) {
    this.query = query;
    this.queryRequest = queryString;
    this.model = model;
  }
  filter() {
    const queryObj = { ...this.queryRequest };
    const excludedFields = ["sort", "limit", "fields", "page"];
    excludedFields.forEach((field) => {
      delete queryObj[field];
    });
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(/\b(lt|lte|gt|gte)\b/g, (match) => {
      return `$${match}`;
    });
    console.log("json", queryString);
    this.query = this.model.find(JSON.parse(queryString));
  }
  sort() {
    if (this.queryRequest.sort) {
      const SortString = this.queryRequest.sort.split(",").join(" ");
      this.query = this.query.sort(SortString);
    } else {
      this.query = this.query.sort("-createdAt");
    }
  }
  fieldsLimiting() {
    if (this.queryRequest.fields) {
      const filedsString = this.queryRequest.fields.split(",").join(" ");
      console.log(filedsString);
      this.query = this.query.select(filedsString);
    } else {
      this.query = this.query.select("-__v");
    }
  }
  pagination() {
    if (this.queryRequest.page) {
      const page = Number(this.queryRequest.page) || 1;
      const limit = Number(this.queryRequest.limit) || 100;
      const skip = (page - 1) * limit;
      // console.log(skip);
      this.query = this.query.skip(skip).limit(limit);
    }
  }
}

module.exports = { apiFeatures };
