package edu.dio.challenges.basic.SumWithTerms;

import java.util.Scanner;

public class SumWithTerms {
	
	public static void main(String[] args) {
			
		Scanner scan = new Scanner(System.in);
		
		double h = 1;
		double total = 0;
		
		int n = scan.nextInt();
		
		for (int i=1; i<=n; i++) {
			
			total += h/i;
			
		}
		
		System.out.println(String.format("%.0f", total));
		
		scan.close();
		
	}
	
}