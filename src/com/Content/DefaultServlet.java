package com.Content;


import java.io.IOException;
import java.io.PrintWriter;


//import java.util.ArrayList;
//import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.Content.method;

/**
 * Servlet implementation class DefaultServlet
 */
@WebServlet("/DefaultServlet")
public class DefaultServlet extends HttpServlet {
	 
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DefaultServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		request.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");

		response.setHeader("Access-Control-Allow-Origin","*");
		response.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");

		PrintWriter out;
		String str = request.getParameter("key");
		
		int key = Integer.valueOf(str);

		switch (key){
			//验证用户名密码是否正确
			case 1:{
				out = response.getWriter();
				String userName = request.getParameter("userNames");
				String passWord = request.getParameter("passWords");
				int retruenKey = method.verify(userName, passWord);

				out.println(retruenKey);
				out.close();
				break;
			}
			case 2:{
				out = response.getWriter();
				String userName = request.getParameter("userNames");
				String passWord = request.getParameter("passWords");
				Boolean bool = method.addUser(userName,passWord);
				out.println(bool);
				out.close();
				break;
			}
			//首页导航的数据
			case 3:{
			    out = response.getWriter();
			    String value = request.getParameter("valueKey");

			    String data = method.navData(value);
			    int rows = method.rowCount(value);

			    String odd = rows+" "+data;
			    out.println(odd);
			    out.close();
			    break;
			}
			case 4:{
			 //userName goodsId goodsPrice goodsNumber
			    out = response.getWriter();
			    String soppingCartUserName = request.getParameter("userName");
			    int soppingCartGoodsId = Integer.valueOf(request.getParameter("goodsId"));
			    Double soppingCartGoodsPrice = Double.valueOf(request.getParameter("goodsPrice")) ;
			    int soppingCartGoodsNumber = Integer.valueOf(request.getParameter("goodsNumber"));

			    int ret = method.addSoppingCart(soppingCartUserName,soppingCartGoodsId,soppingCartGoodsNumber,soppingCartGoodsPrice);
			    out.println(ret);
			    out.close();
			    break;
			}
			case 5:{
				 out = response.getWriter();
				 String orderId = request.getParameter("order");
				 String nameOrder = request.getParameter("userName");
				 int goodsId = Integer.valueOf(request.getParameter("goodsId"));
				 int isSopp = Integer.valueOf(request.getParameter("isSopping"));
				 
				 String time = request.getParameter("time1");
				 int goodSnumber = Integer.valueOf(request.getParameter("goodsNumber"));
				 
				 int ret = method.setOrder(orderId, nameOrder, goodsId, time, goodSnumber);
				 
				 if(isSopp == 1) {
					 method.deleteShopping(goodsId);
				 }
				 
				 out.println(ret);
				 out.close();
				
				break;
			}
			case 6:{
			     out = response.getWriter();
			     String str1 = request.getParameter("userName");
			     int ret = method.getSoppingCertNumber(str1);
			     out.println(ret);
			     
			     out.close();
			     break;
			}
			case 7:{
				out = response.getWriter();
				String username = request.getParameter("userName");

				String ret = method.getShoppingContent(username);
				
				out.println(ret);
				break;
				
			}
			case 8:{
				out = response.getWriter();
				
				int id = Integer.valueOf(request.getParameter("keyValue")) ;
				int ret = method.deleteShopping(id);
				out.println(ret);
				out.close();
			}
			case 9:{
				out = response.getWriter();
				String ret = method.getGoods();
				out.println(ret);
				out.close();
				break;
			}
			case 10:{
				out = response.getWriter();
				String ret = method.getCarousel();
				System.out.println(ret);
				out.println(ret);
				out.close();
				break;
			}
			case 11:{
					out = response.getWriter();

					String name11 = request.getParameter("userNames");
					String ret = method.getOrder(name11);
					System.out.println(ret);
					out.println(ret);
					out.close();
					break;
			}
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
}
