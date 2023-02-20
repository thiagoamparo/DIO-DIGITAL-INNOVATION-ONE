package edu.dio.challenges.basic.Fibonacci;

import java.util.Scanner;

public class Fibonacci {
	
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int n = scan.nextInt();
		
		int next, previous = 0;
		int current = 1;
		
		for (int i=1; i<=n; i++) {
			
			if (i == n) {
				
				System.out.println(previous);
				
			} else {
				
				System.out.print(previous + " ");
				
				next = previous + current;
				previous = current;
				current = next;
				
			}	
		}
		
		scan.close();
		
	}	
	
}