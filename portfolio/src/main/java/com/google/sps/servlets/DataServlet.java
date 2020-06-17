// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson; 
import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    Query query = new Query("Comment").addSort("fullName", SortDirection.DESCENDING);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);

    ArrayList<String> comments = new ArrayList<>();
    for (Entity entity : results.asIterable()) {
      String fullName = (String) entity.getProperty("fullName");
      String comment = (String) entity.getProperty("comment");
      comments.add(fullName);
      comments.add(comment);
    }

    // Converts message to json
    Gson gson = new Gson();
   
    // Sets the value of what to return as response
    response.setContentType("application/json;");
    response.getWriter().println(gson.toJson(comments));

  }
  

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{

      // Gets fullname from form
      String fullName = request.getParameter("full-name");

      // Gets comment from form
      String comment = request.getParameter("comment");

      //Creates comment entity
      Entity commentEntity = new Entity("Comment");

      commentEntity.setProperty("fullName", fullName);
      commentEntity.setProperty("comment", comment);

      DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
      datastore.put(commentEntity);

      // Redirects to main page
      response.sendRedirect("/index.html");
  
  }
}

